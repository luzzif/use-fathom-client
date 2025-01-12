import { writeFile } from "fs/promises";

export const generateMappings = async (events, outDir) => {
  const content = `// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { FathomRegisteredEvent } from "./types";

export const FATHOM_REGISTERED_EVENTS: FathomRegisteredEvent[] = ${JSON.stringify(
    events,
    null,
    4
  )};
`;

  await writeFile(outDir, content);
};
