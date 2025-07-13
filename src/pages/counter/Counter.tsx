import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {create, kill, reset} from '../../store/counterSlice';
import './Counter.scss';
import Button from "../../components/Button";
import {useEffect, useState, useCallback} from "react";

interface Ball {
  id: number;
  left: number;
  animationDelay: number;
}

function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();
  const [balls, setBalls] = useState<Ball[]>([]);
  const [explodedCount, setExplodedCount] = useState(0);
  const [showVictoryMessage, setShowVictoryMessage] = useState(false);

  const random = useCallback((a: number, b: number) => {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }, []);

  const explodeBall = useCallback((ballId: number) => {
    setBalls(prev => prev.filter(ball => ball.id !== ballId));
    setExplodedCount(prev => prev + 1);
    dispatch(kill());
  }, [dispatch]);

  useEffect(() => {
    if (explodedCount >= 10) {
      setShowVictoryMessage(true);
    }
  }, [explodedCount]);

  const handleReset = useCallback(() => {
    dispatch(reset());
    setExplodedCount(0);
    setShowVictoryMessage(false);
  }, [dispatch]);

  useEffect(() => {
    setBalls(prev => {
      if (count === 0) {
        return [];
      } else if (count > prev.length) {
        const newBalls: Ball[] = [];
        for (let i = prev.length; i < count; i++) {
          newBalls.push({
            id: Date.now() + i, // unique ID
            left: random(10, window.innerWidth - 60),
            animationDelay: random(0, 2000)
          });
        }
        return [...prev, ...newBalls];
      } else if (count < prev.length) {
        return prev.slice(0, count);
      }
      return prev;
    });
  }, [count, random]);


  return (
    <div className="counter-container">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div>You need to kill 10 balls to win</div>

      <div className="counter-actions">
        <Button onClick={() => dispatch(create())} value="+"/>
        <Button onClick={() => dispatch(kill())} value="-"/>
        <Button onClick={handleReset} value="Reset"/>
      </div>

      {showVictoryMessage && (
        <div className="victory-message">
          <div>You're not as bad as I thought :)</div>
          <Button onClick={() => setShowVictoryMessage(false)} value="YEAH"/>
        </div>
      )}

      {balls.map((ball) =>
        (<div key={ball.id}
              className="counter-ball"
              style={{
                top: 50,
                left: ball.left,
                animationDelay: `${ball.animationDelay}ms`
              }}
              onClick={() => explodeBall(ball.id)}
        />)
      )}
    </div>
  );
}

export default Counter;
