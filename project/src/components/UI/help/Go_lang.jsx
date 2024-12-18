import { StreamLanguage } from '@codemirror/language';
import { go as goMode } from '@codemirror/legacy-modes/mode/go';
export const goLanguage = () => StreamLanguage.define(goMode);