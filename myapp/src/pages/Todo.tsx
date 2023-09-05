import React,{useState} from 'react'
import InputForm from '../components/InputForm'
import Todolist from '../components/Todolist'
import { useTranslation } from 'react-i18next'
import { MenuItem, Select } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../store/hooks'
import { changeLanguage } from '../features/todoSlice'
const Todo = () => {
  const dispatch=useAppDispatch();
  const {t}=useTranslation();
  const [language,selectedLanguage]=useState('en');
  const handleChange = (e:SelectChangeEvent) => {
    // Your event handling logic her   e
    selectedLanguage(e.target.value); 
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <>
     <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={language}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value='en'>English</MenuItem>
    <MenuItem value='es'>Spanish</MenuItem>
    <MenuItem value='pt'>Portuguese</MenuItem>
  </Select>

    <h1>{t('Todo List')}</h1>
    <InputForm/>
    <Todolist/>
    </>
  )
}

export default Todo