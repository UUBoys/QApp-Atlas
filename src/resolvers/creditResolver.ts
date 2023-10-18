import services from "../services";

const creditResolver = {
  Query: {
    getCredit: (_: any, args: any) => {
      const service = services.find((service) => service.name === "credits");

      if (!service)
        return { success: false, message: "Failed to find services" };

      return { success: true, message: "Credit Success" };
    },
  },
};

export default creditResolver;
