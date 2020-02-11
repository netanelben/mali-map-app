import { elements } from "./elementType";
import { principals } from "./principle";
import { secondaires } from "./secondaire";
import { topics } from "./topic";

const serializeArray = (arr) => arr.map(({ value }) => ({ value: value, label: value }));

const elementTypeArray = serializeArray(elements);
const principalArray = serializeArray(principals);
const secondaireArray = serializeArray(secondaires);
const topicArray = serializeArray(topics);

export {
    elementTypeArray,
    principalArray,
    secondaireArray,
    topicArray
};
