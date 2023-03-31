import { rest } from "msw";

export const handlers = [
  rest.get(`/name`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ id: "999", name: "John Doe" }))
  )
];
