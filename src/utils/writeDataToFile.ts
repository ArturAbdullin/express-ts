import fs from "fs";

const writeDataToFile = (filename: fs.PathOrFileDescriptor, content: any) => {
  fs.writeFileSync(filename, JSON.stringify(content), "utf-8");
};

export default writeDataToFile;
