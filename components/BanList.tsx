import React, {useContext} from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { IChampion } from '../interfaces'
import { LayoutContext } from '../context'

type IBanProps = {
  item: IChampion
}

const BanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

const BanImg = styled.img`
  position: absolute;
  flex-basis: 60px;
  width: 60px;
  height: 60px;
`;

const BanMask = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(0,0,0,.25);
`;

const PickItem = ({ item }: IBanProps) => {
  return <BanDiv>
    <BanImg alt={item?.id} src={item?.imageUrl}/>
    {item?.name && <BanMask />}
  </BanDiv>
}

type IBanListProps = {
  items: IChampion[]
  side: string
}

const BanListDiv = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  ${props => props.width && `
    width: ${props.width}px;
  `}
  ${props => props.height && `
    height: ${props.height}px;
  `}
  ${props => props.side === 'Red' && `
    flex-direction: row-reverse;
  `}
`

const BanList = ({ items, side }: IBanListProps) => {
  const {width, height} = useContext(LayoutContext);
  return <BanListDiv items={items} width={width * .3} height={height * .15} side={side}>
    {items?.map((picked, idx) => <PickItem key={idx} item={picked} />)}
  </BanListDiv>
}

export default BanList;
