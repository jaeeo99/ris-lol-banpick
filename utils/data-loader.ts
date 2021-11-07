import axios from "axios";
import { IChampion } from "../interfaces";

const CHAMPION_DATA_URL = 'https://ddragon.leagueoflegends.com/cdn/11.22.1/data/ko_KR/champion.json';
const CHAMPION_IMAGE_URL_PREFIX = 'http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/';

export const getChampionsRawData = async () => {
  const championData =  await axios.get(CHAMPION_DATA_URL);
  return championData?.data?.data;
}

export const getChampionsData = async () => {
  const rawData = await getChampionsRawData();
  const values = Object.values(rawData);
  const champions = values.reduce((acc: IChampion[], curr) => {
    return acc.concat({ key: curr?.key, name: curr?.name, en: curr?.id, imageUrl: `${CHAMPION_IMAGE_URL_PREFIX}${curr?.image?.full}`})
  }, []);
  return champions;
}
