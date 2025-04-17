export async function getLeetCodeData(username) {
  const query = `
    query {
      matchedUser(username: "${username}") {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
          reputation
        }
      }
    }
  `;

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 }, // cache for 1 hour (optional if using App Router)
  });

  const data = await res.json();
  return data.data.matchedUser;
}
