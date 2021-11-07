import {useEffect, useState} from 'react';
import Layout from '../components/Layout'
import ChampionGrid from '../components/ChampionGrid'
import { IChampion } from '../interfaces';
import { sampleChampionData } from '../utils/sample-data';
import { getChampionsData }  from '../utils/data-loader';

// https://ddragon.leagueoflegends.com/cdn/11.22.1/data/ko_KR/champion.json
// const championsList: IChampion[] = sampleChampionData.map((champion, idx) => ({id: idx + 1, name: champion, status: 'Normal'}));

const IndexPage = () => {
  const [championsList, setChampionsList] = useState([]);
  const getData = async () => {
    const data = await getChampionsData();
    setChampionsList(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <ChampionGrid data={championsList}/>
  </Layout>
}

export default IndexPage
