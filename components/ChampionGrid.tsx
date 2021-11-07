import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { IChampion } from '../interfaces'

type IChampionProps = {
  data: IChampion
}

const ChampionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100px;
  height: 100px;
`

const ChampionImg = styled.img`
  width: 60px;
  height: 60px;
`;

const ChampionItem = ({ data }: IChampionProps) => <ChampionDiv><ChampionImg alt={data?.id} src={data?.imageUrl}/>{data?.name}</ChampionDiv>

type IChampionsProps = {
  data: IChampion[]
  width?: number
  height?: number
}

const ChampionsDiv = styled.div`
  position: relative;
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  gap: 20px;
  padding-top: 40px;
  overflow: scroll;
  ${props => props.width && `
    width: ${props.width}px;
  `}
  ${props => props.height && `
    height: ${props.height}px;
  `}
`

const ChampionSearch = styled.input` 
  position: absolute; 
  width: calc(100% - 8px);
`

const ChampionGrid = ({ data, width, height }: IChampionsProps) => {
  const [search, setSearch] = useState('');
  const [filteredChampions, setFilteredChampions] = useState([]);
  const onSearch = (e) => { setSearch(e.target.value)	}
  useEffect(() => {
    const uppercaseSearch = search.toUpperCase();
    const filtered = _.filter(data, (o) => {
      return _.includes(o?.name?.toUpperCase(), uppercaseSearch) || _.includes(o?.en?.toUpperCase(), uppercaseSearch)
    });
    setFilteredChampions(filtered);
  }, [search, data]);
  return <ChampionsDiv width={width} height={height}>
    <ChampionSearch type="text" onChange={onSearch} value={search}/>
    {filteredChampions?.map((champion, idx) => <ChampionItem key={idx} data={champion}/>)}
  </ChampionsDiv>
}

export default ChampionGrid;
