import Head from "next/head";
import Link from "next/link";


const endpoint = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=nba";
export async function getServerSideProps() {
  const res = await fetch(endpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const { teams = [] } = data;
  return (
    <div className="teams">
      <Head>
        <title>NBA Teams</title>
      </Head>
      {teams.map((team) => {
        const { idTeam, strTeam, strTeamBadge } = team;
        return (
          <span key={idTeam}>
            <Link href="/team/[name]" as={`/team/${strTeam}`}>
              <a>
                <img src={strTeamBadge} width="100" />
                <p>{strTeam}</p>
              </a>
            </Link>
          </span>
        );
      })}
    </div>
  );
}