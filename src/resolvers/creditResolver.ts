import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/proto/com/qapp/hermes/hermes";
import { grpcToPromise } from "../grpc/utils/index";
import { GraphQLError } from "graphql";
import { Resolvers } from "../graphQLTypes/resolvers-types";

const service = services.find((service) => service.name === "credits");
const client = new com.qapp.hermes.CreditServiceClient(
  service?.url || "",
  credentials.createSsl()
);

const creditResolver: Resolvers = {
  Mutation: {
    topupCredits: async (_, args, context) => {
      if (!context.user || !context.user.id)
        throw new GraphQLError("Unauthorized");

      const request = new com.qapp.hermes.TopupCreditsRequest({
        amount: args.amount,
        user_id: context.user.id,
      });

      const response =
        await grpcToPromise<com.qapp.hermes.CreditsOperationResponse>(
          (callback) => client.TopupCredits(request, callback)
        );

      return {
        success: true,
        oldBalance: response.old_balance,
        newBalance: response.new_balance,
      };
    },
  },

  Query: {
    getCredit: async (_, args, context) => {
      if (!context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.hermes.GetCreditsRequest({
        user_id: context.user.id,
      });

      const response =
        await grpcToPromise<com.qapp.hermes.CreditStatusResponse>((callback) =>
          client.GetCredits(request, callback)
        );
      console.log(response.user_id);
      return { success: true, balance: response.balance };
    },
  },
};

export default creditResolver;
