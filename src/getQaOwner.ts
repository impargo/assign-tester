import { request, gql } from "graphql-request";
import * as core from "@actions/core";

interface Assignee {
  displayName: string;
}

interface ChildNode {
  assignee: Assignee;
}

interface Issue {
  children: {
    nodes: ChildNode[];
  };
}

const endpoint: string = "https://api.linear.app/graphql";
const authToken: string = core.getInput("LINEAR_API_KEY");

const query = gql`
  query Children($term: String!) {
    searchIssues(term: $term) {
      nodes {
        children {
          nodes {
            assignee {
              displayName
            }
          }
        }
      }
    }
  }
`;

const variables = {
  term: core.getInput("BRANCH_NAME"),
};

function mapLinearToGitHub(linearUsername: string): string {
  const mapping: any = {
    "h.aboshama": "heshamaboshama10",
    "d.paulus": "david-paulus-saad",
    "j.labeit": "jlabeit",
    "k.sakr": "KhaledSakr",
    "a.mostafa": "AsmaaAlamrawy",
    "l.boragy": "lboragy",
    "m.waleed": "mowaleed96",
    "m.zaki": "Mostafa-Zaki-dev",
    "n.daif": "nermindaif",
    "o.tharwat": "Omar-Khaledd",
    "t.ahmed": "Git-TamerAhmed",
    "a.shaarawy": "Ahmed-Shaarawy",
    "a.rashad": "amrahmed242",
    "b.reda": "beshoyreda0",
    "d.cortizo": "daviddurre",
  };

  return mapping[linearUsername] || "GitHubUsernameNotFound";
}

export async function getQaOwner(): Promise<string | null> {
  try {
    const data: any = await request(endpoint, query, variables, {
      Authorization: `${authToken}`,
    });

    const issues = data.searchIssues.nodes;

    for (const issue of issues) {
      for (const child of issue.children.nodes) {
        console.log("Linear username", child.assignee.displayName);
        const githubUsername = mapLinearToGitHub(child.assignee.displayName);
        console.log("Username", githubUsername);
        if (githubUsername) {
          return githubUsername;
        }
      }
    }

    return null;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}
