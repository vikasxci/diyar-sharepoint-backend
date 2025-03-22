import dotenv from "dotenv";

dotenv.config();

const setupSharePoint = async () => {
  const { sp } = await import("@pnp/sp"); // Dynamic import
  const { NodeSPAuth } = await import("node-sp-auth"); // Dynamic import

  const authOptions = {
    username: process.env.SHAREPOINT_USERNAME,
    password: process.env.SHAREPOINT_PASSWORD,
  };

  const auth = new NodeSPAuth(authOptions);

  sp.setup({
    sp: {
      fetchClientFactory: () => auth.getAuth(),
      baseUrl: process.env.SHAREPOINT_SITE_URL,
    },
  });

  return sp;
};

export default setupSharePoint;