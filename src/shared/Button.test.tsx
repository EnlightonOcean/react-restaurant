import Button from './Button';
import {render,screen} from '@testing-library/react';

describe("Button",() =>{
   it("should render children",() => {
    const {getByRole} = render (<Button type="button" variant='primary'>Click me</Button>);
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