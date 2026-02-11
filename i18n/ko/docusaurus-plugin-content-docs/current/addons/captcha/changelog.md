---
title: 캡차 변경 로그
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
**Answer**

Let  

\[
f(x)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x}e^{-t^{2}/2}\,dt
\]

be the standard normal cdf.  
For a fixed \(x\in\mathbb R\) we have to evaluate

\[
I(x)=\int_{-\infty}^{\infty}\frac{e^{-t^{2}/2}}{(x-t)^{2}+1}\,dt .
\]

--------------------------------------------------------------------

### 1.  A useful representation

For \(a>0\)

\[
\frac{1}{a^{2}+1}= \int_{0}^{\infty}e^{-a^{2}u}\,e^{-u}\,du .
\]

Hence

\[
I(x)=\int_{0}^{\infty}e^{-u}\,
      \underbrace{\int_{-\infty}^{\infty}e^{-u\,t^{2}}e^{ixt}\,dt}_{=:J(u)}\,du .
\]

--------------------------------------------------------------------

### 2.  The inner Gaussian integral

The Fourier transform of a Gaussian is again a Gaussian:

\[
J(u)=\int_{-\infty}^{\infty}e^{-u\,t^{2}}e^{ixt}\,dt
     =\sqrt{\frac{\pi}{u}}\;
       e^{-\,x^{2}/(4u)} .
\]

--------------------------------------------------------------------

### 3.  The remaining integral

Thus

\[
I(x)=\sqrt{\pi}\int_{0}^{\infty}
      \frac{e^{-x^{2}/(4u)-u}}{\sqrt{u}}\;du .
\]

Put \(u=\dfrac{x^{2}}{4v}\;(v>0)\).  
Then \(du=-\dfrac{x^{2}}{4v^{2}}\,dv\) and

\[
I(x)=\sqrt{\pi}\,e^{-x^{2}/4}\,
      \frac{x}{2}\int_{0}^{\infty}v^{-3/2}e^{-v}\,dv .
\]

The last integral is a Gamma–function:

\[
\int_{0}^{\infty}v^{-3/2}e^{-v}\,dv
   =\Gamma\!\left(-\tfrac12\right)
   =-2\sqrt{\pi}.
\]

--------------------------------------------------------------------

### 4.  Result

Collecting the constants,

\[
I(x)=\sqrt{\pi}\,e^{-x^{2}/4}\,
      \frac{x}{2}\,(-2\sqrt{\pi})
   =-\pi\,x\,e^{-x^{2}/4}.
\]

--------------------------------------------------------------------

\[
\boxed{\displaystyle 
\int_{-\infty}^{\infty}\frac{e^{-t^{2}/2}}{(x-t)^{2}+1}\,dt
   =-\pi\,x\,e^{-x^{2}/4}\qquad (x\in\mathbb R)}
\]

The integral is an elementary function; no special functions are required.
