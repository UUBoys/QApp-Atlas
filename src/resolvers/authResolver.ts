import services from "../services";
import { credentials } from "@grpc/grpc-js";

import { com } from "../grpc/src/grpc/proto/services/auth/v1/auth_service";
import { register } from "ts-node";
const service = services.find((service) => service.name === "auth");

const authResolver = {
  Mutation: {
    login: async (_: any, args: any) => {
      const client = new com.qapp.auth.AuthServiceClient(
        service?.url || "",
        credentials.createInsecure()
      );

      const request = new com.qapp.auth.LoginRequest();
      request.email = args.email;
      request.password = args.password;

      console.log(request.email, request.password);

      return await new Promise((resolve, reject) => {
        client.Login(request, (err, response) => {
          if (err || !response) {
            console.log(err);
            resolve({ success: false, token: "" });
            return;
          }
          resolve({ success: true, token: response.token });
        });
      });
    },
    register: async (_: any, args: any) => {
      const client = new com.qapp.auth.AuthServiceClient(
        service?.url || "",
        credentials.createInsecure()
      );

      const request = new com.qapp.auth.RegisterRequest({
        email: args.email,
        password: args.password,
        username: args.username,
      });

      return await new Promise((resolve, reject) => {
        client.Register(request, (err, response) => {
          if (err || !response) {
            console.log(err);
            resolve({ success: false, token: "" });
            return;
          }
          resolve({ success: true, token: response.token });
        });
      });
    },
  },
};

export default authResolver;
