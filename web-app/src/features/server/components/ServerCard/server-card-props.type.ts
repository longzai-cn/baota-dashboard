import { Server } from "@/features/server/common/server.entity";

export type ServerCardProps = {
  server: Server
  polling?: boolean;
};
