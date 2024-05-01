import { ChangeEvent, useState } from "react";
import { Item } from '../models/Item'

interface FormProps {
    onFormSubmit: (item: Item) => void;

  }

function Form({onFormSubmit}: FormProps) {
    const [form, setForm] = useState({
        date: '',
        distance: '',
    });
    
    const handleDateChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {value} = target;
        setForm(prevForm => ({...prevForm, date: value}));
    }
    const handleDistanceChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {value} = target;
        setForm(prevForm => ({...prevForm, distance: value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onFormSubmit({date: new Date(form.date), distance: form.distance});
        setForm({
            date: '',
            distance: '',
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="date_format">
                        <p>Дата (ДД.ММ.ГГ.)</p>
                        <input 
                        id="date" className="date" 
                        value={form.date?.toString() || ''} 
                        onChange={handleDateChange}>
                        </input>
                    </div>
                    <div className="distance_format">
                        <p>Пройдено, км</p>
                        <input id="distance" className="distance" 
                        value={form.distance}
                        onChange={handleDistanceChange}>
                        </input>
                    </div>
                    <button type="submit" className="btn_ok">OK</button>
                </div>
            </form>

        </>
    )
}

export default Form
