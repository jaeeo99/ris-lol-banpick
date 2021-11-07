import React from 'react'
import styled from 'styled-components';

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
}

const ChampionsDiv = styled.div`
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  gap: 20px;
`

const ChampionGrid = ({ data }: IChampionsProps) => (
  <ChampionsDiv>
    {data?.map((champion, idx) => <ChampionItem key={idx} data={champion}/>)}
  </ChampionsDiv>
)

export default ChampionGrid;
