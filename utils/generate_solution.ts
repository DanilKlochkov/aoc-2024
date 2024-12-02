import "jsr:@std/dotenv/load";

const TEST_FILE_TEMPLATE = "./utils/template_test.txt";
const SOLUTION_FILE_TEMPLATE = "./utils/template_solution.ts";
const SESSION_COOKIE = Deno.env.get("SESSION_COOKIE");

const createTaskInput = async (day: number, year: number, dir: string) => {
    const url = `https://adventofcode.com/${year}/day/${day}/input`;

    const headers = new Headers();
    headers.set("Cookie", `session=${SESSION_COOKIE};`)

    return fetch(url, {
        headers: headers
    })
        .then(res => res.text())
        .then(res => Deno.writeTextFile(`${dir}/data.txt`, res))
}

const generate = async () => {
    const day = new Date().getUTCDate();
    const dayFormatted = day.toString().padStart(2, "0");
    const year = new Date().getFullYear();

    const solutionDir = `./solutions/december${dayFormatted}`
    await Deno.mkdir(solutionDir);
    await Deno.create(`${solutionDir}/first.ts`)
    await Deno.copyFile(SOLUTION_FILE_TEMPLATE, `${solutionDir}/first.ts`)
    await Deno.create(`${solutionDir}/second.ts`)
    await Deno.copyFile(SOLUTION_FILE_TEMPLATE, `${solutionDir}/second.ts`)

    const testDir = `./tests/december${dayFormatted}`;
    const testFile = `${testDir}/solution_test.ts`;
    await Deno.mkdir(testDir);
    await createTaskInput(day, year, testDir);
    await Deno.create(testFile)

    const test = await Deno.readTextFile(TEST_FILE_TEMPLATE);

    await Deno.writeTextFileSync(testFile, test.replace(/{{day}}/g, dayFormatted))
}

await generate();