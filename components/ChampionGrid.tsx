import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { IChampion } from '../interfaces'
import { LayoutContext } from '../context'

type IChampionProps = {
  data: IChampion
  onClick: any
}

const ChampionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: auto;
  height: 100px;
  cursor: pointer;
`

const ChampionImg = styled.img`
  width: 60px;
  height: 60px;
`;

const ChampionItem = ({ data, onClick }: IChampionProps) => 
  <ChampionDiv onClick={() => onClick(data)}>
    <ChampionImg alt={data?.id} src={data?.imageUrl}/>
    <span>{data?.name}</span>
  </ChampionDiv>

type IChampionsProps = {
  data: IChampion[]
  actions?: any
}

const ChampionsDiv = styled.div`
  position: relative;
  flex: 6;
  ${props => props.width && `
    width: ${props.width}px;
  `}
  ${props => props.height && `
    height: ${props.height}px;
  `}
`

const ChampionSearch = styled.input` 
  position: relative;
  width: calc(100% - 8px);
  height: 30px;
`

const ChampionList = styled.div`
  height: calc(100% - 30px);
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  gap: 20px;
  overflow: scroll;
`;

const ChampionGrid = ({ data, actions }: IChampionsProps) => {
  const { championPicked } = actions;
  const [search, setSearch] = useState('');
  const [filteredChampions, setFilteredChampions] = useState([]);
  const {width, height} = useContext(LayoutContext);
  const onSearch = (e) => { setSearch(e.target.value)	}
  useEffect(() => {
    const uppercaseSearch = search.toUpperCase();
    const filtered = _.filter(data, (o) => {
      return _.includes(o?.name?.toUpperCase(), uppercaseSearch) || _.includes(o?.en?.toUpperCase(), uppercaseSearch)
    });
    setFilteredChampions(filtered);
  }, [search, data]);
  return <ChampionsDiv width={width * .6} height={height * .85}>
    <ChampionSearch type="text" onChange={onSearch} value={search}/>
    <ChampionList>
      {filteredChampions?.map((champion, idx) => <ChampionItem key={idx} data={champion} onClick={(champion) => championPicked(champion)}/>)}
    </ChampionList>
  </ChampionsDiv>
}

export default ChampionGrid;
