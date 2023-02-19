---
title: "Identifiers and Reserved words"
---

## Identifiers

A name in Java program is called **identifier**, which can be used for identification purpose. It can be method name, variable name, class name or label name.

**Rules for defining Java identifiers:**

1. Alphanumeric a-z, A-Z, $, \_ otherwise compile time error.
2. Can't start with a number.
3. Java identifiers are case sensitive. Java is a case sensitive programming language.
4. There is no length limit for identifiers.
5. We can't use reserved words as identifiers. (All predefined Java class names and interface names are not reserved words; we can use as identifiers, eg. int String = 25; is valid. Not recommended as it _reduces readability_ and creates _confusion_).

## Reserved words

In Java some words are reserved to represent some meaningful functionality, such type of words are called **reserved words**. There are 53 of them.

<aside>
💡 Reserved words 53
|- Keywords 50
|  |- Used keywords 48
|  |  |- if else
|  |  |- for
|  |  |- while
|  |  |- ...
|  |
|  |- Unused keywords 2
|     |- goto
|     |- const
|
|- Reserved Literals 3
   |- true
   |- false
   |- null

</aside>

## Used keywords 48

**Keywords for data types 8:**
byte short int long
float double
boolean
char

**Keywords for flow control 11:**
if else
switch case default
while do for
break continue return

**Keywords for modifiers 11:**
public private protected
static final abstract
synchronized native strictfp
transient volatile

**Keywords for exception handling 6:**
try catch finally
throw throws
assert

**Class related keywords 6:**
class
interface
extends implements
package import

**Object related keywords 4:**
new
instanceof
super
this

**void keyword:**
void, in Java return type is mandatory, if a method won't return anything then we have to declare that method with void return type. But in C lang return type is optional and the default return type is int.

**enum keyword:**
We can use enum to define a group of named constants.

## Unused keywords 2

**goto:**
Usage of goto created several problems in old languages, and hence some people banned this keyword in Java.

**const:**
Use of final instead of const.

## Reserved Literals 3

**true** and **false**, values for boolean data type.

**null**, default value for object reference.

## Conclusions

All 53 reserved words in Java contains only **lower case alphabet** symbols.

In Java we have only **new** keyword but **no delete** keyword because destruction of useless object is the responsibility of garbage collector.
