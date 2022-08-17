### How to use `css(style)` ?

- `css({ display: 'flex' })` or `css([{display; 'flex', flexDirection: 'row' }, { flexDirection: 'column' }])`
- passing and array of style-objects is costly as it involves merging of those styles, such that later overrride previous style.
- dynamic style objects are somewhat costly as not only object is created on each render but a new record is created in cahche map

```jsx
// recommened: create non-chaning style object ref
const styles = {
  container: {
    height: "calc(100vh)",
    width: "calc(100vh)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    backgroundColor: "black",
    padding: 10,
    color: "white",
    fontSize: 16
  }
};

function App() {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.box)}>Box</div>
    </div>
  );
}

// un-optimised
// for every css call a new object entry is created in map
function App() {
  return (
    <div
      className={css({
        height: "calc(100vh)",
        width: "calc(100vh)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      })}
    >
      <div
        className={css({
          backgroundColor: "black",
          padding: 10,
          color: "white",
          fontSize: 16
        })}
      >
        Box
      </div>
    </div>
  );
}
```
