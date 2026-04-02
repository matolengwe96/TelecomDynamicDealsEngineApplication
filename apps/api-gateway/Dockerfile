FROM node:20-alpine AS base
RUN npm install -g pnpm @nestjs/cli typescript@5.9.3

WORKDIR /app

# Copy workspace files before install so package-level node_modules links remain valid
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* tsconfig.base.json .npmrc ./
COPY packages/ ./packages/
COPY apps/api-gateway/ ./apps/api-gateway/

RUN pnpm install --frozen-lockfile --prod=false

RUN tsc -p packages/contracts/tsconfig.json
RUN tsc -p packages/config/tsconfig.json

WORKDIR /app/apps/api-gateway
RUN printf '{"$schema":"https://json.schemastore.org/nest-cli","collection":"@nestjs/schematics","sourceRoot":"src","compilerOptions":{"deleteOutDir":true}}' > nest-cli.json
RUN nest build

EXPOSE 3000

CMD ["node", "dist/main"]
