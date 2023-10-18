import services from "../services";

const authResolver = {
  Mutation: {
    login: (_: any, args: any) => {
      const service = services.find((service) => service.name === "auth");

      if (!service)
        return { success: false, message: "Failed to find services" };

      return { success: true, message: "Login Success" };
    },
  },
  Query: {
    getTest: (_: any, args: any) => {
      const service = services.find((service) => service.name === "credits");

      if (!service)
        return { success: false, message: "Failed to find services" };

      return { success: true, message: "Credit Success" };
    },
  },
};

export default authResolver;
