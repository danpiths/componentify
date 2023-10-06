// import { PineconeClient } from "@pinecone-database/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";

export const getPineconeIndex = async () => {
  const pinecone = new Pinecone();
  // @ts-ignore
  await pinecone.init({
    environment: "gcp-starter",
    apiKey: process.env.PINECONE_API_KEY!,
  });
  const index = pinecone.Index("componentify");

  return index;
};
