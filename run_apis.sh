#!/bin/bash
path=$HOME/go/src/github.com/andersonlira/
projects=(item-api group-api purchase-api market-api)
start()
{
    for p in ${projects[@]}
    do
        echo "starting $p"
        cd $path/$p/
        ./$p.exe &
    done
}

stop()
{
    for p in ${projects[@]}
    do
        echo "stoping $p"
        kill -9 $(ps | grep $p | awk '{print $1}')
    done
    
}



help()
{
	echo
	echo
	echo
	echo '+-------------------------------------------------------------------------------------------------------------------------'
	echo '+-------------------------------------------------------------------------------------------------------------------------'
	echo '|'
	echo '|'
    echo '|' $"$0 says"
    echo '|'
    echo "| start - starts all apis"
    echo "| stop - stop all apis"
    echo "| help - show this help"
	echo '|'
	echo '|'
	echo '+-------------------------------------------------------------------------------------------------------------------------'
	echo '+-------------------------------------------------------------------------------------------------------------------------'

}

case "$1" in
        start)
            start
            ;;
         
        stop)
            stop
            ;;
        opn)
            opn $2
            ;;
         
        *)
			help
            exit 1
 
esac
