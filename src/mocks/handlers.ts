import { HttpHandler } from "msw";
import { getPostsMSW } from "../api/posts/posts.msw";

const handlers: HttpHandler[] = [...getPostsMSW()];
export default handlers;
