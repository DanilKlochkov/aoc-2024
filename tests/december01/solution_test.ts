import { assertEquals } from "@std/assert";
import first from "../../solutions/december01/first.ts";
import second from "../../solutions/december01/second.ts";

const data = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`

Deno.test("Check first", () => {
    assertEquals(first(data), 11);
});

Deno.test("Check second", () => {
    assertEquals(second(data), 31);
});