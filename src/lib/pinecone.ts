// import { PineconeClient } from "@pinecone-database/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";

export const getPineconeIndex = async () => {
  const pinecone = await new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: "gcp-starter",
  });
  const index = pinecone.Index("componentify");

  return index;
};
