import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/proto/com/qapp/cerberus/cerberus";
import { grpcToPromise } from "../grpc/utils/index";
import { Resolvers } from "../graphQLTypes/resolvers-types";

const service = services.find((service) => service.name === "auth");
const client = new com.qapp.cerberus.AuthServiceClient(
  service?.url || "",
  credentials.createSsl()
);
const authResolver: Resolvers = {
  Mutation: {
    login: async (_, args, context) => {
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
    register: async (_, args, context) => {
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
    googleOAuth: async (_, args, context) => {
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
