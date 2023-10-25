import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/src/grpc/proto/services/auth/v1/auth_service";
import { grpcToPromise } from "../grpc/utils/index";

const service = services.find((service) => service.name === "auth");

const authResolver = {
  Mutation: {
    login: async (_: any, args: any) => {
      const client = new com.qapp.auth.AuthServiceClient(
        service?.url || "",
        credentials.createSsl()
      );

      const request = new com.qapp.auth.LoginRequest({
        email: args.email,
        password: args.password,
      });

      console.log(request.email, request.password);

      const response = await grpcToPromise<com.qapp.auth.LoginResponse>(
        (callback) => client.Login(request, callback)
      );

      return { success: true, token: response.token };
    },
    register: async (_: any, args: any) => {
      const client = new com.qapp.auth.AuthServiceClient(
        service?.url || "",
        credentials.createSsl()
      );

      const request = new com.qapp.auth.RegisterRequest({
        email: args.email,
        password: args.password,
        username: args.username,
      });

      console.log(request.email, request.password, request.username);

      const response = await grpcToPromise<com.qapp.auth.RegisterResponse>(
        (callback) => client.Register(request, callback)
      );

      return { success: true, token: response.token };
    },
  },
};

export default authResolver;
