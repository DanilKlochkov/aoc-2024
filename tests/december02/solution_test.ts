import {assertEquals} from "@std/assert";
import first from "../../solutions/december02/first.ts";
import second from "../../solutions/december02/second.ts";

const data = `7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9`;

Deno.test({
    name: "Check first 02dec",
    permissions: {read: true},
    fn: async (ctx) => {
        await ctx.step("check test data", () => {
            assertEquals(first(data), 2);
        })
        await ctx.step("check real data", async () => {
            const data = await Deno.readTextFile("./tests/december02/data.txt");
            assertEquals(first(data), 639);
        })
    }
});

Deno.test({
    name: "Check second 02dec",
    permissions: {read: true},
    fn: async (ctx) => {
        await ctx.step("check test data", () => {
            assertEquals(second(data), 4);
        })
        await ctx.step("check real data", async () => {
            const data = await Deno.readTextFile("./tests/december02/data.txt");
            assertEquals(second(data), 674);
        })
    }
});