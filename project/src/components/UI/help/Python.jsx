import { StreamLanguage } from '@codemirror/language';
import { python as pythonMode } from '@codemirror/legacy-modes/mode/python';

export const pythonLanguage = () => StreamLanguage.define(pythonMode);