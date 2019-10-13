"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Movie",
    embedded: false
  },
  {
    name: "Actor",
    embedded: false
  },
  {
    name: "Director",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/prasanna-mestha/Scoutbase/dev`
});
exports.prisma = new exports.Prisma();
