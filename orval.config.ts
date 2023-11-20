export default {
  petstore: {
    output: {
      mode: "tags-split",
      target: "src/api",
      schemas: "src/model",
      client: "vue-query",
      mock: true,
    },
    input: {
      target: "./openapi.yaml",
    },
  },
};
