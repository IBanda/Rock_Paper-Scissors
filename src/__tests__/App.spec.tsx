import {render,screen,waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(()=>{
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
})

test('App test',async ()=>{
jest.useFakeTimers()
render(<App/>);
const btnWeapons = screen.getAllByTestId('weapon');
userEvent.click(btnWeapons[Math.floor(Math.random()*3)])
await waitForElementToBeRemoved(()=>screen.getByTestId('placeholder'));
expect(screen.getByText(/you (draw|win|lose)/gi)).toBeInTheDocument()
})