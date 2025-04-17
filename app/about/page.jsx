import { getLeetCodeData } from "@/lib/getLeetCodeData";
import LeetCodeStats from "@/components/LeetCodeStats";

export default async function HomePage() {
  const data = await getLeetCodeData("kamleshgurjarpalwas"); // your LeetCode username
  return (
    <>
      <LeetCodeStats data={data} />
    </>
  );
}
