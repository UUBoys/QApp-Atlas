import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/src/grpc/proto/services/auth/v1/auth_service";
import { grpcToPromise } from "../grpc/utils/index";

const service = services.find((service) => service.name === "auth");
const client = new com.qapp.cerberus.AuthServiceClient(
  service?.url || "",
  credentials.createSsl()
);
const authResolver = {
  Mutation: {
    login: async (_: any, args: any, context: any) => {
      const request = new com.qapp.cerberus.LoginRequest({
        email: args.email,
        password: args.password,
      });

      console.log(request.email, request.password);

      const response = await grpcToPromise<com.qapp.cerberus.LoginResponse>(
        (callback) => client.Login(request, callback)
      );

      return { success: true, token: response.token };
    },
    register: async (_: any, args: any, context: any) => {
      const request = new com.qapp.cerberus.RegisterRequest({
        email: args.email,
        password: args.password,
        username: args.username,
      });

      console.log(request.email, request.password, request.username);

      const response = await grpcToPromise<com.qapp.cerberus.RegisterResponse>(
        (callback) => client.Register(request, callback)
      );

      return { success: true, token: response.token };
    },
    googleOAuth: async (_: any, args: any, context: any) => {
      const request = new com.qapp.cerberus.GoogleLoginRequest({
        idToken: args.idToken,
      });

      console.log(request.idToken);

      const response = await grpcToPromise<
        com.qapp.cerberus.LoginResponse
      >((callback) => client.GoogleOAuthLogin(request, callback));

      return { success: true, token: response.token };
    }
  },
};

export default authResolver;
