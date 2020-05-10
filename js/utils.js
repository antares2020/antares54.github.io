const BASE_PATH = './media/';

const buildScorePath = (name) => `${BASE_PATH}scores/${name}.png`;
const buildSqPath = (name) => `${BASE_PATH}sqs/${name}.jpeg`;


const getScore = (score) => {
  if (score > 3) return buildScorePath('excelent');
  if (score > 2) return buildScorePath('good');
  if (score > 1) return buildScorePath('medium');
  return buildScorePath('bad');
}

const getSortedRoles = () => {
  const firstDay = moment(PRIMO_GIORNO).endOf('day');
  const diffWeeks = moment.duration(moment().diff(firstDay)).asWeeks();
  const roundedDiffWeeks = Math.trunc(diffWeeks);
  const translateCoef = roundedDiffWeeks % 6;
  const sortedSqs = SQUADRIGLIE.slice(translateCoef, SQUADRIGLIE.length)
    .concat(SQUADRIGLIE.slice(0, translateCoef));
  return {
    roles: sortedSqs.map((sq, index) => ({
      sq,
      image: buildSqPath(sq),
      role: INCARICHI[index],
    })),
  };
}

const getResults = () => ({
  results: RISULTATI_INCARICHI,
  sqs: SQUADRIGLIE,
});
