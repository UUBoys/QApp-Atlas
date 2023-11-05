import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/proto/com/qapp/zeus/zeus";
import { grpcToPromise } from "../grpc/utils/index";
import { GraphQLError } from "graphql";

const service = services.find((service) => service.name === "establishment");
const client = new com.qapp.zeus.ZeusClient(
  service?.url || "",
  credentials.createSsl()
);

const establishmentResolver = {
  Mutation: {
    createEstablishment: async (_: any, args: any, context: any) => {
      if (!context || !context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.CreateEstablishmentRequest({
        name: args.name,
        description: args.description,
        street: args.street,
        city: args.city,
        country: args.country,
        ownerId: context.user.id,
      });

      const response = await grpcToPromise<com.qapp.zeus.Establishment>(
        (callback) => client.CreateEstablishment(request, callback)
      );

      return {
        success: true,
        establishment: {
          id: response.id,
          name: response.name,
          description: response.description,
          street: response.street,
          city: response.city,
          country: response.country,
        },
      };
    },
    createEvent: async (_: any, args: any, context: any) => {
      if (!context || !context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.CreateEventRequest({
        name: args.name,
        description: args.description,
        start_date: args.start_date,
        end_data: args.end_date,
        price: args.price,
        establishmentId: args.establishment_id,
        maximumCapacity: args.maximumCapacity,
      });

      const response = await grpcToPromise<com.qapp.zeus.Event>((callback) =>
        client.CreateEvent(request, callback)
      );

      return {
        success: true,
        event: {
          id: response.id,
          name: response.name,
          description: response.description,
          start_date: response.start_date,
          end_date: response.end_date,
          price: response.price,
          establishment_id: response.establishment_id,
        },
      };
    },
    purchaseTicket: async (_: any, args: any, context: any) => {
      if (context === undefined || context.user.id !== args.user_id)
        throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.PurchaseTicketRequest({
        eventId: args.event_id,
        userId: context.user.id,
      });

      const response = await grpcToPromise<com.qapp.zeus.Ticket>((callback) =>
        client.PurchaseTicket(request, callback)
      );

      return {
        success: true,
        ticket: {
          id: response.id,
          event_id: response.event_id,
          user_id: response.user_id,
        },
      };
    },
  },

  Query: {
    getEstablishment: async (_: any, args: any, context: any) => {
      if(args.id !== undefined) {
        const request = new com.qapp.zeus.GetEstablishmentRequest({ id: args.id });
        const response = await grpcToPromise<com.qapp.zeus.Establishment>(
          (callback) => client.GetEstablishment(request, callback)
        );

        return { success: true, establishments: [response] };
      }
      
      const request = new com.qapp.zeus.GetEstablishmentsRequest()

      const response = await grpcToPromise<com.qapp.zeus.GetEstablishmentsResponse>(
          (callback) => client.GetEstablishments(request, callback)
      );

      return { success: true, establishments: response.establishments };
    },
    getEstablishmentsForUser: async (_: any, args: any, context: any) => {
      if (!context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.GetEstablishmentsForUserRequest({
        userId: context.user.id,
      });

      const response = await grpcToPromise<com.qapp.zeus.GetEstablishmentsResponse>((callback) =>
        client.GetEstablishmentForUser(request, callback)
      );

      return { success: true, establishments: response.establishments}
    },
    getEvents: async (_: any, args: any, context: any) => {
      if (!context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.GetEventsRequest({});

      const response = await grpcToPromise<com.qapp.zeus.GetEventsResponse>(
        (callback) => client.GetEvents(request, callback)
      );

      return { success: true, events: response.events };
    },
  },
};

export default establishmentResolver;
