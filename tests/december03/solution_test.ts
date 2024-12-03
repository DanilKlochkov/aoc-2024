import {assertEquals} from "@std/assert";
import first from "../../solutions/december03/first.ts";
import second from "../../solutions/december03/second.ts";

const firstData = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const secondData = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

Deno.test({
    name: "Check first 03dec",
    fn: async () => {
        assertEquals(first(firstData), 161);
    }
});

Deno.test({
    name: "Check first 03dec real data",
    permissions: {read: true},
    ignore: true,
    fn: async () => {
        const data = await Deno.readTextFile("./tests/december03/data.txt");
        assertEquals(first(data), 167090022);
    }
});

Deno.test({
    name: "Check second 03dec",
    fn: () => {
        assertEquals(second(secondData), 48);
    }
});

Deno.test({
    name: "Check second 03dec real data",
    permissions: {read: true},
    ignore: true,
    fn: async () => {
        const data = await Deno.readTextFile("./tests/december03/data.txt");
        assertEquals(second(data), 89823704);
    }
});