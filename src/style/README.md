### Atomic props

- The props like `padding` are converted to atomic props i.e `padding-top`, `padding-bottom`, `padding-left` and `padding-right`. It is illegal to declare these long hand props and we will log a warning for these props.
- Helper props like `mx` are decoded as `margin-left` and `margin-right`
- Helpers props have a small cost to them of lookup and conversion.

### Size and Space props

- And size props declared having a numerical is assumed to be px and thus converted into `rem`
- props related to border and border-width are converted to px always
- Any size prop that is not numeric is not touched and value remain as it is.

### CSS specificty

- We don't recommend to use css `id` in css #main is not recommened if you want you can use .main or [id="main"]
- We don't recomment to use !important try overcomming it by repeating classes like `div .main.main` instear of using !important
