import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/src/grpc/proto/services/credits/v1/credits_service";
import { grpcToPromise } from "../grpc/utils/index";
import { GraphQLError } from "graphql";

const service = services.find((service) => service.name === "credits");
const client = new com.qapp.hermes.CreditServiceClient(
  service?.url || "",
  credentials.createSsl()
);

const creditResolver = {
  Mutation: {
    topupCredits: async (_: any, args: any, context: any) => {
      if (context === undefined || context.user.id !== args.user_id)
        throw new GraphQLError("Unauthorized");

      const request = new com.qapp.hermes.TopupCreditsRequest({
        amount: args.amount,
        user_id: args.user_id,
      });

      const response =
        await grpcToPromise<com.qapp.hermes.CreditsOperationResponse>(
          (callback) => client.Login(request, callback)
        );

      return {
        success: true,
        oldBalance: response.old_balance,
        newBalance: response.new_balance,
      };
    },
  },

  Query: {
    getCredit: async (_: any, args: any, context: any) => {
      if (!context.user) throw new GraphQLError("Unauthorized");

      const request = new com.qapp.hermes.GetCreditsRequest({
        user_id: context.user.id,
      });

      const response =
        await grpcToPromise<com.qapp.hermes.CreditStatusResponse>((callback) =>
          client.GetCredit(request, callback)
        );

      return { success: true, balance: response.balance };
    },
  },
};

export default creditResolver;
