import * as stories from './Button.stories';
import { composeStories } from '@storybook/testing-react';
import {render,screen} from '@testing-library/react';
import Button from './Button';

const { Primary } = composeStories(stories);


describe("Button",() =>{
   it("should render children",() => {
    const {getByRole} = render (<Primary />);
    //expect(getByRole("button",{ name: "Click me"})).toBeInTheDocument();
    getByRole("button",{ name: "Click me"});
   }) ;

   it("should set a custom CSS class",() => {
      const { getByRole } = render (<Button type="button" variant='primary' className='my-class'>Click me</Button>);
      expect(getByRole("button",{ name: "Click me" })).toHaveClass('my-class');
   });

   //test type prop
   it("should set a type button",() => {
      const { getByRole } = render (<Button type="button" variant='primary' className='my-class'>Click me</Button>);
      expect(getByRole("button",{ name: "Click me" })).toHaveProperty("type",'button');
   });

   it("should apply proper style for a variant",() => {
      const { getByRole } = render (<Button type="button" variant='primary' className='my-class'>Click me</Button>);
      expect(getByRole("button",{ name: "Click me" })).toHaveClass("bg-blue-500 text-white");
   });

   it("should apply type submit attribute",() => {
      const { getByRole } = render (<Button type="submit" variant='primary' className='my-class'>Click me</Button>);
      expect(getByRole("button",{ name: "Click me" })).toHaveAttribute("type","submit");
   });

   //screen 
   it("should apply type submit attribute",() => {
      render (<Button type="submit" variant='primary' className='my-class'>Click me</Button>);
      expect(screen.getByRole("button",{ name: "Click me" })).toHaveAttribute("type","submit");
   });

    ////for bebugging
    it("should apply type submit attribute",() => {
      const { getByRole,debug } = render (<Button type="submit" variant='primary' className='my-class'>Click me</Button>);
      debug();
      expect(getByRole("button",{ name: "Click me" })).toHaveAttribute("type","submit");
   });

});