import React, {useContext} from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { IChampion } from '../interfaces'
import { LayoutContext } from '../context'

type IPickProps = {
  item: IChampion
  side: string
}

const PickDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;
  flex: 1;
  overflow: hidden;
  ${props => props.background && `
    background-image: url('${props.background}');
  `}
  background-position: 20% 20%;
`

const PickItem = ({ item, side }: IPickProps) => {
  return <PickDiv side={side} background={item?.splashUrl} x={item?.image?.x} y={item?.image?.y} />
}

type IPickListProps = {
  items: IChampion[]
  side: string
}

const PickListDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  ${props => props.width && `
    width: ${props.width}px;
  `}
  ${props => props.height && `
    height: ${props.height}px;
  `}
`

const PickList = ({ items, side }: IPickListProps) => {
  const {width, height} = useContext(LayoutContext);
  return <PickListDiv items={items} width={width * .2} height={height * .85}>
    {items?.map((picked, idx) => <PickItem key={idx} item={picked} side={side} />)}
  </PickListDiv>
}

export default PickList;
