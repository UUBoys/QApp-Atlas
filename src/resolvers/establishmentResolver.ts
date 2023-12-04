import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/proto/com/qapp/zeus/zeus";
import { grpcToPromise } from "../grpc/utils/index";
import { GraphQLError } from "graphql";
import { Resolvers, SearchResultType } from "../graphQLTypes/resolvers-types";
import logger from "../logger/log";

const service = services.find((service) => service.name === "establishment");
const client = new com.qapp.zeus.ZeusClient(
  service?.url || "",
  credentials.createSsl()
);

const establishmentResolver: Resolvers = {
  Mutation: {
    createEstablishment: async (_, args, context) => {
      if (!context || !context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.CreateEstablishmentRequest({
        name: args.name,
        description: args.description,
        street: args.street,
        city: args.city,
        country: args.country,
        ownerId: context.user.id,
        coverImage: args.coverImage ?? undefined,
        profileImage: args.profileImage ?? undefined,
      });

      const response = await grpcToPromise<com.qapp.zeus.Establishment>(
        (callback) => client.CreateEstablishment(request, callback)
      );

      return {
        establishment: {
          id: response.id,
          name: response.name,
          description: response.description,
          street: response.street,
          city: response.city,
          country: response.country,
          coverImage: response.coverImage,
          profileImage: response.profileImage,
        },
      };
    },
    updateEstablishment: async (_, args, context) => {
      if (!context || !context.user) throw new GraphQLError("Unauthorized");

      if (args.establishment_id === undefined)
        throw new GraphQLError("No establishment id provided");

      const request = new com.qapp.zeus.UpdateEstablishmentRequest({
        id: args.establishment_id,
        updater_id: context.user.id,
        name: args.name ?? undefined,
        description: args.description ?? undefined,
        street: args.street ?? undefined,
        city: args.city ?? undefined,
        country: args.country ?? undefined,
        coverImage: args.coverImage ?? undefined,
        profileImage: args.profileImage ?? undefined,
      });

      const response = await grpcToPromise<com.qapp.zeus.Establishment>(
        (callback) => client.UpdateEstablishment(request, callback)
      );

      return {
        establishment: {
          id: response.id,
          name: response.name,
          description: response.description,
          street: response.street,
          city: response.city,
          country: response.country,
          coverImage: response.coverImage,
          profileImage: response.profileImage,
        },
      };
    },
    createEvent: async (_, args, context) => {
      if (!context || !context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.CreateEventRequest({
        name: args.name,
        description: args.description,
        start_date: args.start_date,
        end_data: args.end_date,
        price: args.price,
        image: args.image ?? undefined,
        establishmentId: args.establishment_id,
        maximumCapacity: args.maximumCapacity,
      });

      const response = await grpcToPromise<com.qapp.zeus.Event>((callback) =>
        client.CreateEvent(request, callback)
      );

      return {
        event: {
          id: response.id,
          name: response.name,
          description: response.description,
          start_date: response.start_date,
          end_date: response.end_date,
          price: response.price,
          image: response.image,
          establishment_id: response.establishment_id,
          maximumCapacity: response.maximumCapacity,
        },
      };
    },
    purchaseTicket: async (_, args, context) => {
      if (context === undefined || context.user.id !== args.user_id)
        throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.PurchaseTicketRequest({
        eventId: args.event_id,
        userId: context.user.id,
      });

      const response = await grpcToPromise<com.qapp.zeus.TicketPurchaseResult>((callback) =>
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
    search: async (_, args, context) => {
      //if (!context || !context.user) throw new GraphQLError("Unauthorized");

      const EstablishmentRequest = new com.qapp.zeus.GetEstablishmentsRequest();
      const EventRequest = new com.qapp.zeus.GetEventsRequest();

      if (args.type === "ESTABLISHMENT") {
        const response =
          await grpcToPromise<com.qapp.zeus.GetEstablishmentsResponse>(
            (callback) =>
              client.GetEstablishments(EstablishmentRequest, callback)
          );

        const establishments = response.establishments.filter((establishment) =>
          establishment.name.includes(args.query)
        );
        return {
          results: establishments.map((establishment) => ({
            result: {
              __typename: "Establishment" as const,
              id: establishment.id,
              name: establishment.name,
              description: establishment.description,
              street: establishment.street,
              city: establishment.city,
              country: establishment.country,
              coverImage: establishment.coverImage,
              profileImage: establishment.profileImage,
            },
            searchType: SearchResultType.Establishment,
          })),
        };
      } else if (args.type === "EVENT") {
        const response = await grpcToPromise<com.qapp.zeus.GetEventsResponse>(
          (callback) => client.GetEvents(EventRequest, callback)
        );

        const events = response.events.filter((event) =>
          event.name.includes(args.query)
        );
        return {
          results: events.map((event) => ({
            result: {
              __typename: "Event" as const,
              id: event.id,
              name: event.name,
              description: event.description,
              start_date: event.start_date,
              end_date: event.end_date,
              price: event.price,
              establishment_id: event.establishment_id,
              maximumCapacity: event.maximumCapacity,
            },
            searchType: SearchResultType.Event,
          })),
        };
      } else {
        const EstablishmentsResponse =
          await grpcToPromise<com.qapp.zeus.GetEstablishmentsResponse>(
            (callback) =>
              client.GetEstablishments(EstablishmentRequest, callback)
          );

        const EventsResponse =
          await grpcToPromise<com.qapp.zeus.GetEventsResponse>((callback) =>
            client.GetEvents(EventRequest, callback)
          );

        const establishments = EstablishmentsResponse.establishments.filter(
          (establishment) => establishment.name.includes(args.query)
        );
        const events = EventsResponse.events.filter((event) =>
          event.name.includes(args.query)
        );
        return { results: [...establishments.map((establishment) => {
          return {
            result: {
              __typename: "Establishment" as const,
              id: establishment.id,
              name: establishment.name,
              description: establishment.description,
              street: establishment.street,
              city: establishment.city,
              country: establishment.country,
              coverImage: establishment.coverImage,
              profileImage: establishment.profileImage,
            },
            searchType: SearchResultType.Establishment,
          };
        }), ...events.map((event) => {
          return {
            result: {
              __typename: "Event" as const,
              id: event.id,
              name: event.name,
              description: event.description,
              start_date: event.start_date,
              end_date: event.end_date,
              price: event.price,
              establishment_id: event.establishment_id,
              maximumCapacity: event.maximumCapacity,
            },
            searchType: SearchResultType.Event,
          };
        })] };
      }
    },
  },

  Query: {
    getEstablishmentById: async (_, args, context) => {
      if (args.id !== undefined)
        new GraphQLError("No establishment id provided");

      const request = new com.qapp.zeus.GetEstablishmentRequest({
        id: args.id,
      });
      const response = await grpcToPromise<com.qapp.zeus.Establishment>(
        (callback) => client.GetEstablishment(request, callback)
      );

      return { establishments: [response] };
    },
    getEstablishments: async (_, args, context) => {
      const request = new com.qapp.zeus.GetEstablishmentsRequest();

      const response =
        await grpcToPromise<com.qapp.zeus.GetEstablishmentsResponse>(
          (callback) => client.GetEstablishments(request, callback)
        );

      return { establishments: response.establishments };
    },
    getEstablishmentsForUser: async (_, args, context) => {
      if (!context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.GetEstablishmentsForUserRequest({
        userId: context.user.id,
      });

      const response =
        await grpcToPromise<com.qapp.zeus.GetEstablishmentsResponse>(
          (callback) => client.GetEstablishmentForUser(request, callback)
        );

      return { establishments: response.establishments };
    },
    getEvents: async (_, args, context) => {
      //if (!context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.zeus.GetEventsRequest({});

      const response = await grpcToPromise<com.qapp.zeus.GetEventsResponse>(
        (callback) => client.GetEvents(request, callback)
      );

      return { events: response.events };
    },
    getEventById: async (_, args, context) => {
      const request = new com.qapp.zeus.GetEventRequest({ id: args.id });

      const response = await grpcToPromise<com.qapp.zeus.Event>((callback) =>
        client.GetEvent(request, callback)
      );

      return { events: [response] };
    },
  },
  Establishment: {
    events: async ({ id }) => {
      const request = new com.qapp.zeus.GetEventsForEstablishmentRequest({
        establishmentId: id as number,
      });

      const response = await grpcToPromise<com.qapp.zeus.GetEventsResponse>(
        (callback) => client.GetEventsForEstablishment(request, callback)
      );

      return response.events.map((event) => ({
        id: event.id,
        name: event.name,
        description: event.description,
        start_date: event.start_date,
        end_date: event.end_date,
        price: event.price,
        image: event.image,
        establishment_id: event.establishment_id,
        maximumCapacity: event.maximumCapacity,
      }));
    },
  },
};

export default establishmentResolver;
