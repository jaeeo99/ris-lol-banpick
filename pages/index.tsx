import {useEffect, useState, useContext, useCallback, useMemo} from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import Layout from '../components/Layout'
import BanList from '../components/BanList'
import PickList from '../components/PickList'
import ChampionGrid from '../components/ChampionGrid'
import { getChampionsData } from '../utils/data-loader'
import { BanPickContext } from '../context'

// https://ddragon.leagueoflegends.com/cdn/11.22.1/data/ko_KR/champion.json
// const championsList: IChampion[] = sampleChampionData.map((champion, idx) => ({id: idx + 1, name: champion, status: 'Normal'}));

const ChampionPickLayout = styled.div`
  min-width: 900px;
  display: flex;
`
const ChampionBanLayout = styled.div`
  min-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`


const ChampionBanPick = ({championsList, actions}) => {
  const {blue, red} = useContext(BanPickContext);
  return (<>
    <ChampionBanLayout>
      <BanList items={blue?.banned} side="Blue"/>
      <BanList items={red?.banned} side="Red"/>
    </ChampionBanLayout>
    <ChampionPickLayout>
      <PickList items={blue?.picked} side="Blue"/>
      <ChampionGrid actions={actions} data={championsList}/>
      <PickList items={red?.picked} side="Red"/>
    </ChampionPickLayout>
  </>)
}

const IndexPage = () => {
  const [championsList, setChampionsList] = useState([]);
  const [phase, setPhase] = useState(1);
  const [blue, setBlue] = useState({
    picked: Array(5).fill(null), banned: Array(5).fill(null),
  });
  const [red, setRed] = useState({
    picked: Array(5).fill(null), banned: Array(5).fill(null),
  });
  const getData = async () => {
    const data = await getChampionsData();
    setChampionsList(_.sortBy(data, 'name'));
  }
  useEffect(() => {
    getData();
  }, []);
  const disabled = useMemo(() => {
    const usedChampions = [].concat(blue.picked).concat(blue.banned).concat(red.picked).concat(red.banned);
    return usedChampions.reduce((acc, curr) => curr?.name ? acc.concat(curr.name) : acc, []);
  }, [blue.picked, blue.banned, red.picked, red.banned]);

  const championPicked = useCallback((picked) => {
    console.log(picked);
    if(disabled.includes(picked.name)) return;
    switch(phase) {
      case 1:
        setBlue(Object.assign(blue, {
          banned: blue.banned.map((item, idx) => idx === 0 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 2:
        setRed(Object.assign(red, {
          banned: red.banned.map((item, idx) => idx === 0 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 3:
        setBlue(Object.assign(blue, {
          banned: blue.banned.map((item, idx) => idx === 1 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 4:
        setRed(Object.assign(red, {
          banned: red.banned.map((item, idx) => idx === 1 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 5:
        setBlue(Object.assign(blue, {
          banned: blue.banned.map((item, idx) => idx === 2 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 6:
        setRed(Object.assign(red, {
          banned: red.banned.map((item, idx) => idx === 2 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 7:
        setBlue(Object.assign(blue, {
          picked: blue.picked.map((item, idx) => idx === 0 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 8:
        setRed(Object.assign(red, {
          picked: red.picked.map((item, idx) => idx === 0 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 9:
        setRed(Object.assign(red, {
          picked: red.picked.map((item, idx) => idx === 1 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 10:
        setBlue(Object.assign(blue, {
          picked: blue.picked.map((item, idx) => idx === 1 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 11:
        setBlue(Object.assign(blue, {
          picked: blue.picked.map((item, idx) => idx === 2 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 12:
        setRed(Object.assign(red, {
          picked: red.picked.map((item, idx) => idx === 2 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 13:
        setRed(Object.assign(red, {
          banned: red.banned.map((item, idx) => idx === 3 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 14:
        setBlue(Object.assign(blue, {
          banned: blue.banned.map((item, idx) => idx === 3 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 15:
        setRed(Object.assign(red, {
          banned: red.banned.map((item, idx) => idx === 4 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 16:
        setBlue(Object.assign(blue, {
          banned: blue.banned.map((item, idx) => idx === 4 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 17:
        setRed(Object.assign(red, {
          picked: red.picked.map((item, idx) => idx === 3 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 18:
        setBlue(Object.assign(blue, {
          picked: blue.picked.map((item, idx) => idx === 3 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 19:
        setBlue(Object.assign(blue, {
          picked: blue.picked.map((item, idx) => idx === 4 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      case 20:
        setRed(Object.assign(red, {
          picked: red.picked.map((item, idx) => idx === 4 ? picked : item)
        }));
        setPhase(phase + 1);
        return;
      default:
        setBlue({picked: Array(5).fill(null), banned: Array(5).fill(null)});
        setRed({picked: Array(5).fill(null), banned: Array(5).fill(null)});
        setPhase(1);
        return;
    }
  }, [phase, blue, red, disabled]);

  const actions = {
    championPicked
  }

  const banpickDefault = { red, blue, setRed, setBlue };
  return <Layout title="밴픽 시뮬레이터">
    <BanPickContext.Provider value={banpickDefault}>
      <ChampionBanPick championsList={championsList} actions={actions}/>
    </BanPickContext.Provider>
  </Layout>
}

export default IndexPage
