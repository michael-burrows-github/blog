import Head from 'next/head'

const endpoint = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=";
export async function getServerSideProps({ query }) {
  const { name } = query;
  const res = await fetch(`${endpoint}${name}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Team({ data }) {
  const {
    strTeam,
    strStadium,
    strStadiumThumb,
    strFacebook,
    strInstagram,
    strTwitter,
  } = data.teams[0]; 
  return (
    <div className="team">
      <Head>
        <title>{strTeam} - NBA Team</title>
      </Head>
      <h1>{strTeam}</h1>
      <h3>Stadium</h3>
      <p>{strStadium}</p>
      <img src={strStadiumThumb} width="400" />
      <h3>Social</h3>
      <ul>
        <li><a href={"http://" + strFacebook}>Facebook</a></li>
        <li><a href={"http://" + strInstagram}>Instagram</a></li>
        <li><a href={"http://" + strTwitter}>Twitter</a></li>
      </ul>
    </div>
  );
}
