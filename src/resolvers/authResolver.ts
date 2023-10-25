import services from "../services";
import { credentials } from "@grpc/grpc-js";

import {
  AuthServiceClient,
  LoginRequest,
} from "../grpc/src/grpc/proto/services/auth/v1/auth_service";

const authResolver = {
  Mutation: {
    login: async (_: any, args: any) => {
      const service = services.find((service) => service.name === "auth");
      const client = new AuthServiceClient(
        service?.url || "",
        credentials.createInsecure()
      );

      const request = new LoginRequest();
      request.email = args.email;
      request.password = args.password;

      let resultObj = {};

      await client.Login(request, (err, response) => {
        if (err || !response) {
          resultObj = { success: false, token: "" };
          return;
        }

        resultObj = { success: true, token: response.token };
      });

      return resultObj;
    },
  },
};

export default authResolver;
