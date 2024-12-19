import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { goLanguage} from "./help/Go_lang";
import { pythonLanguage} from "./help/Python";
import {Button, Stack} from "react-bootstrap";

function CodeArea (props) {
    const [code, setCode] = useState('// Напишите ваш код здесь...');
    const [output, setOutput] = useState(''); // Для вывода результата

    // Функция для выбора языка подсветки
    const getLanguageExtension = () => {
        switch (props.lang) {
            case 'javascript':
                return javascript();
            case 'go':
                return goLanguage();
            case 'python':
                return pythonLanguage();
            default:
                return javascript();
        }
    };
    //запрос к мок серверу и получение ответа
    const executeCode = () => {
        fetch('/api/execute', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ language: props.lang, code })
        })
            .then(res => res.json())
            .then(data => setOutput(data.output))
            .catch(err => setOutput("Ошибка выполнения кода"));
    };


    return (
        <Stack direction="vertical" gap={3}>
            <div style={{textAlign:"center",userSelect: "none"}} className="fs-2">Создайте функцию, которая будет писать в консоли "Привет 'Имя пользователя'!"</div>
            <CodeMirror
                value={code}
                minHeight={`300px`}
                height="max-content"
                extensions={[getLanguageExtension()]}
                onChange={(value) => {setCode(value)}}
                className="fs-3"
            />
            <Button  className="mx-auto w-auto fs-2" onClick={executeCode}>Выполнить</Button>
            <div style={{textAlign:"center",userSelect: "none"}} className="fs-2">{output}</div>
        </Stack>
    );
};
export default CodeArea;